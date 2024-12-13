import React, { useState } from "react";
import {
  Text,
  Box,
  VStack,
  HStack,
  Center,
  Heading,
  Button,
  NativeBaseProvider,
  extendTheme,
  FlatList,
  Modal,
  Pressable,
  Icon,
  IconButton,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

// Custom theme configuration for Baby Blue and Baby Pink
const theme = extendTheme({
  colors: {
    babyBlue: {
      50: "#e0f7ff",
      100: "#b2e6ff",
      200: "#80d4ff",
      300: "#4fc2ff",
      400: "#1eb0ff",
      500: "#0090d7", // primary color
      600: "#006a9b",
      700: "#004766",
      800: "#002b32",
      900: "#00151a",
    },
    babyPink: {
      50: "#ffe0f5",
      100: "#ffb2e6",
      200: "#ff80d4",
      300: "#ff4fc2",
      400: "#ff1eb0",
      500: "#e60090", // secondary color
      600: "#b2006a",
      700: "#7f0047",
      800: "#4c002b",
      900: "#1a0015",
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

const concerts = [
  {
    id: "1",
    artist: "NIKI",
    location: "Singapore",
    date: "2024-12-22",
    genre: "Pop",
    playlist: "https://example.com/niki-playlist",
    setlist: ["La La Lose You", "Backburner", "Autumn"],
    preparations: [
      "Tiket Konser",
      "Ponsel terisi penuh",
      "Siapkan kamera",
      "Kenali kebijakan tempat",
      "KTP atau identitas diri",
      "Uang tunai dan kartu pembayaran",
    ],
  },
  {
    id: "2",
    artist: "Coldplay",
    location: "Los Angeles",
    date: "2024-12-30",
    genre: "Rock",
    playlist: "https://example.com/coldplay-playlist",
    setlist: ["Yellow", "Fix You", "Viva La Vida"],
    preparations: [
      "Isi baterai ponsel",
      "Datang lebih awal",
      "Siapkan kamera",
      "Tiket fisik/elektronik",
      "KTP atau identitas diri",
      "Botol minum (sesuai kebijakan tempat)",
      "Bank daya",
      "Uang tunai dan kartu pembayaran",
      "Penyumbat telinga (untuk melindungi pendengaran dari suara yang terlalu keras)",
      "Merchandise",
    ],
  },
  {
    id: "3",
    artist: "Bruno Mars",
    location: "Las Vegas",
    date: "2024-12-15",
    genre: "Pop",
    playlist: "https://example.com/bruno-mars-playlist",
    setlist: ["Uptown Funk", "Just the Way You Are", "Locked Out of Heaven"],
    preparations: [
      "Tiket Konser",
      "KTP atau identitas diri",
      "Ponsel terisi penuh",
      "Siapkan foto atau video",
      "Uang tunai dan kartu pembayaran",
    ],
  },
  {
    id: "4",
    artist: "Lana Del Rey",
    location: "Miami",
    date: "2024-12-20",
    genre: "Indie Pop",
    playlist: "https://example.com/lana-del-rey-playlist",
    setlist: ["Summertime Sadness", "Born to Die", "Young and Beautiful"],
    preparations: [
      "Tiket Konser",
      "Kenali kebijakan tempat",
      "Kamera atau ponsel untuk foto",
      "Merchandise",
      "Uang tunai dan kartu pembayaran",
      "KTP atau identitas diri",
    ],
  },
  {
    id: "5",
    artist: "Cigarettes After Sex",
    location: "Los Angeles",
    date: "2024-12-25",
    genre: "Indie Pop",
    playlist: "https://example.com/cigarettes-after-sex-playlist",
    setlist: ["K.", "Apocalypse", "Each Time You Fall In Love"],
    preparations: [
      "Tiket Konser (fisik atau elektronik)",
      "Identitas resmi (KTP atau paspor)",
      "Kenali kebijakan keamanan",
      "Uang tunai dan kartu pembayaran",
    ],
  },
];

const lyrics = {
  "La La Lose You": `La La, I’ll lose you, in the night
But I’ll be fine, no need to cry
It’s just a phase, you’ll see
And in the end, you’ll still be here with me`,
  Backburner: "Put me on the backburner, I’ll wait...",
  Autumn: "The autumn leaves fall down so slow...",
  K: `I can't say I'm sorry
It's just too late
I can't say I need you
Cause I don't feel the same way
It's just too late for us now
But I will wait for you somehow
For you somehow
I can't say I love you
I can't say I need you
But I will wait for you somehow`,
  Apocalypse: "Now that you're gone, I can't go on...",
  "Each Time You Fall In Love": "Each time you fall in love, you fall in love...",
  Yellow: `Look at the stars
Look how they shine for you
And everything you do
Yeah, they were all yellow`,
  "Fix You": "Lights will guide you home, and ignite your bones...",
  "Viva La Vida": "I used to rule the world, seas would rise when I gave the word...",
  "Uptown Funk": "This hit, that ice cold, Michelle Pfeiffer, that white gold...",
  "Just the Way You Are": "When I see your face, there's not a thing that I would change...",
  "Locked Out of Heaven": "Never had much faith in love or miracles...",
  "Summertime Sadness": "I got that summertime, summertime sadness...",
  "Born to Die": "Let's go to the beach, each, let's go get a wave...",
  "Young and Beautiful": "Will you still love me when I'm no longer young and beautiful?",
};

function HomeScreen({ navigation }) {
  return (
    <Center flex={1} _dark={{ bg: "babyBlue.900" }} _light={{ bg: "babyBlue.50" }}>
      <VStack space={4} alignItems="center" px={4} mt={8}>
        <Heading size="lg" color="babyPink.500" mb={4}>
          Concert Planner
        </Heading>
        <FlatList
          data={concerts}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{ borderColor: "babyBlue.600" }}
              _light={{ borderColor: "babyBlue.200" }}
              py="4"
              px="2"
              borderRadius="md"
              mb={4}
              _hover={{ bg: "babyBlue.200" }}
              shadow={2} // added shadow for depth
              _light={{
                bg: "white",
                borderColor: "babyBlue.300",
                shadowColor: "gray.200",
              }}
            >
              <HStack space={4} alignItems="center">
                <IconButton
                  icon={<Icon as={Ionicons} name="musical-notes" size="lg" color="babyPink.500" />}
                  _pressed={{
                    bg: "babyBlue.300",
                    _icon: { color: "babyPink.600" },
                  }}
                  onPress={() => navigation.navigate("Detail", { concert: item })}
                />
                <VStack>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="babyPink.500"
                    mb={1}
                  >
                    {item.artist} - {item.location}
                  </Text>
                  <Text color="babyBlue.600">Tanggal: {item.date}</Text>
                  <Text color="babyBlue.600">Genre: {item.genre}</Text>
                </VStack>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </Center>
  );
}

function DetailsScreen({ route }) {
  const { concert } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", items: [] });

  const openModal = (title, items) => {
    setModalContent({ title, items });
    setShowModal(true);
  };

  return (
    <Center flex={1} _dark={{ bg: "babyBlue.900" }} _light={{ bg: "babyBlue.50" }}>
      <VStack space={4} alignItems="center" px={4} mt={8}>
        <Heading size="lg" color="babyPink.500" mb={2}>
          Konser {concert.artist}
        </Heading>
        <Text color="babyBlue.600" fontSize="md" mb={2}>
          Lokasi: {concert.location}
        </Text>
        <Text color="babyBlue.600" fontSize="md" mb={4}>
          Tanggal: {concert.date}
        </Text>
        <Heading size="md" color="babyPink.500" mb={2}>
          Daftar Lagu:
        </Heading>
        <VStack space={2} alignItems="flex-start" mb={4}>
          {concert.setlist.map((song, index) => (
            <Pressable
              key={index}
              onPress={() =>
                openModal("Detail Lagu", [song, lyrics[song] || "Lirik tidak tersedia"])
              }
            >
              <Text color="babyBlue.700" fontSize="md" _hover={{ color: "babyPink.500" }}>
                - {song}
              </Text>
            </Pressable>
          ))}
        </VStack>
        <Button
          colorScheme="babyBlue"
          onPress={() => openModal("Persiapan Konser", concert.preparations)}
          mb={4}
          width="80%"
          _hover={{ bg: "babyPink.300" }}
        >
          Concert preparations
        </Button>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>{modalContent.title}</Modal.Header>
            <Modal.Body>
              {modalContent.items.map((item, index) => (
                <Text key={index} mb={2}>
                  - {item}
                </Text>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={() => setShowModal(false)} colorScheme="babyPink">
                Tutup
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </VStack>
    </Center>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Beranda" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
