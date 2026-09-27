// app/(tabs)/tentang.tsx
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "../../constants/styles";

export default function TabTentang() {
  return (
    <SafeAreaView style={{ flex: 1, padding: spacing.sedang, gap: spacing.kecil }}>
      <Text
        accessible
        accessibilityLabel="Judul halaman Tentang aplikasi Jelajah Aman"
        style={{ fontWeight: "bold", fontSize: typeScale.judul }}
      >
        Jelajah Aman
      </Text>
      <Text style={{ fontSize: typeScale.isi }}>Versi 1.0.0</Text>
      <Text style={{ fontSize: typeScale.keterangan }}>Dibuat oleh: Arum Rahma</Text>
    </SafeAreaView>
  );
}