import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizStorage } from '../storage/quizStorage';
import AdBanner from '../components/AdBanner';
import { useAds } from '../components/AdProvider';

export default function HistoryScreen({ navigation }) {
  const { showResultView } = useAds();
  const [logs, setLogs] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchHistoryLogs = async () => {
      // FIXED: Call the correct async method from storage utility
      const history = await quizStorage.getAllResults();
      setLogs(history || []);
    };

    const unsubscribe = navigation.addListener('focus', () => {
      fetchHistoryLogs();
    });
    
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />
      
      {/* Header Panel */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz Logs</Text>
        <View style={{ width: 60 }} />
      </View>

      <FlatList
        data={logs}
        keyExtractor={(item, index) => item.id || String(index)}
        initialNumToRender={10}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<AdBanner />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📊</Text>
            <Text style={styles.emptyText}>No previous score logs found.</Text>
            <Text style={styles.emptySubtext}>Complete a chemistry quiz subtopic to see your performance metrics tracked here.</Text>
          </View>
        )}
        renderItem={({ item: log, index }) => {
          const percentage = log.percentage !== undefined ? log.percentage : Math.round((log.score / log.total) * 100);
          return (
            <TouchableOpacity key={log.id || index} style={styles.card} activeOpacity={0.8} onPress={() => showResultView(() => setDetail(log))}>
              <View style={styles.cardLeft}>
                <Text style={styles.topicText}>{log.topicId ? log.topicId.replace(/_/g, ' ').toUpperCase() : 'UNKNOWN'}</Text>
                <Text style={styles.dateText}>{log.date}</Text>
              </View>
              <View style={styles.cardRight}>
                <Text style={styles.scoreText}>{log.score} / {log.total}</Text>
                <Text style={styles.percentText}>{percentage}%</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <Modal visible={!!detail} transparent animationType="slide" onRequestClose={() => setDetail(null)}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" }} activeOpacity={1} onPress={() => setDetail(null)}>
          <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 24, paddingBottom: 32 }}>
            <View style={{ width: 40, height: 4, backgroundColor: "#d1d5db", borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#111827", textAlign: "center" }}>{detail ? String(detail.topicId).replace(/_/g, ' ').toUpperCase() : ""}</Text>
            <Text style={{ fontSize: 13, color: "#94a3b8", textAlign: "center", marginTop: 4 }}>{detail?.date}</Text>
            <View style={{ backgroundColor: "#f8fafc", borderRadius: 12, padding: 14, marginVertical: 16 }}>
              <Text style={{ fontSize: 15, color: "#374151" }}>Score: <Text style={{ fontWeight: "800" }}>{detail?.score} / {detail?.total}</Text></Text>
              <Text style={{ fontSize: 15, color: "#374151", marginTop: 6 }}>Percentage: <Text style={{ fontWeight: "800" }}>{detail ? Math.round((detail.score / detail.total) * 100) : 0}%</Text></Text>
            </View>
            <TouchableOpacity onPress={() => setDetail(null)} style={{ backgroundColor: "#f1f5f9", borderRadius: 12, paddingVertical: 13 }}>
              <Text style={{ color: "#0f172a", textAlign: "center", fontWeight: "700", fontSize: 14 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  backBtn: { paddingVertical: 6, paddingHorizontal: 12, backgroundColor: '#f1f5f9', borderRadius: 8 },
  backBtnText: { color: '#0f172a', fontWeight: '700', fontSize: 14 },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#0f172a' },
  scrollPadding: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 40 },
  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 80, paddingHorizontal: 20 },
  emptyIcon: { fontSize: 40, marginBottom: 12 },
  emptyText: { fontSize: 16, fontWeight: '700', color: '#475569', marginBottom: 6, textAlign: 'center' },
  emptySubtext: { fontSize: 14, color: '#94a3b8', textAlign: 'center', lineHeight: 20 },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#e2e8f0', elevation: 1 },
  cardLeft: { flex: 1, gap: 4 },
  topicText: { fontSize: 15, fontWeight: '800', color: '#0f172a' },
  dateText: { fontSize: 13, color: '#94a3b8', fontWeight: '500' },
  cardRight: { alignItems: 'flex-end', gap: 2 },
  scoreText: { fontSize: 16, fontWeight: '800', color: '#dc2626' },
  percentText: { fontSize: 13, color: '#64748b', fontWeight: '600' }
});
