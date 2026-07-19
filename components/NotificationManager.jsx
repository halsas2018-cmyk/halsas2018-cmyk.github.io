import * as Notifications from "expo-notifications";
import { notificationStorage } from "../storage/notificationStorage";

const REMINDER_ID = "daily-study-reminder";
const CHANNEL_ID = "study-reminders";

// Show notifications even while the app is foregrounded.
export function initNotifications() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export async function getPermissionStatus() {
  const { status } = await Notifications.getPermissionsAsync();
  return status; // 'granted' | 'denied' | 'undetermined'
}

// Prompts the OS permission dialog. Returns true if granted.
export async function requestPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}

// Schedule (or reschedule) a daily local reminder at the given 24h time.
export async function scheduleDailyReminder(hour, minute) {
  try {
    await Notifications.cancelScheduledNotificationsAsync();
  } catch (e) {
    // ignore — nothing scheduled yet
  }
  await Notifications.scheduleNotificationAsync({
    identifier: REMINDER_ID,
    content: {
      title: "Time to study? 📚",
      body: "Open SciPractice for 10 minutes — keep your streak alive!",
    },
    trigger: { hour, minute, repeats: true },
  });
}

export async function cancelReminders() {
  await Notifications.cancelScheduledNotificationsAsync();
}

// Apply the persisted settings: schedule if enabled, cancel if not.
// Requests permission first time an enabled reminder is turned on.
export async function applySettings(settings) {
  if (settings.enabled) {
    const granted = await requestPermission();
    if (!granted) {
      await notificationStorage.setSettings({ ...settings, enabled: false });
      return false;
    }
    await scheduleDailyReminder(settings.hour, settings.minute);
    return true;
  }
  await cancelReminders();
  return false;
}
