import { ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import Content from "./Content";

function VisiMisi() {
  return (
    <Content title="Visi & Misi Sekolah">
      <Content.Section title="Visi">
        <Text fontSize={"xs"} fontWeight={"bold"}>
          ”Terbentuknya Siswa yang Beriman dan Bertaqwa Kepada Allah Swt.,
          Berilmu Pengetahuan dan Keterampilan Serta Mempunyai Wawasan dan
          Kesadaran Terhadap Diri dan Lingkungan”
        </Text>
      </Content.Section>
      <Content.Section title="Misi">
        <Text fontSize={"xs"}>
          Untuk mencapai Visi dimaksud perlu dilakukan suatu Misi berupa
          kegiatan jangka panjang dengan arah yang jelas dan sistematis.
        </Text>
        <Text fontSize={"xs"}>
          Berikut Misi MTs. Miftahul Ulum Sungai Tabuk :
        </Text>
        <OrderedList fontSize={"xs"}>
          <ListItem>
            Menanamkan keyakinan / Aqidah agama melalui :
            <UnorderedList>
              <ListItem>Pendidikan Ilmu Tauhid</ListItem>
              <ListItem>
                Pendidikan dan Bimbingan Ibadah Salat (Salat Wajib dan Sunnah)
              </ListItem>
              <ListItem>Pendidikan Al Qur’an dan Maulidurrasul</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Mengoptimalkan proses pembelajaran dan bimbingan secara efektif dan
            efesien.
          </ListItem>
          <ListItem>
            Mengembangkan pengetahuan di bidang IPTEK, Bahasa, Olah Raga dan
            Seni Budaya sesuai dengan bakat, minat dan potensi siswa.
          </ListItem>
        </OrderedList>
      </Content.Section>
    </Content>
  );
}

export default VisiMisi;
