import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const habitSuggestions: any = {
    Fitness: [
        "10-minute morning workout",
        "Evening walk for 20 minutes",
        "Stretching before sleep",
    ],
    Study: [
        "Learn 5 new words daily",
        "30-minute focused study session",
        "Practice one coding problem daily",
    ],
    "Mental Health": [
        "Daily journaling (5 mins)",
        "5-minute meditation every morning",
        "Take a nature break once per day",
    ],
    Productivity: [
        "Plan next day before sleep",
        "Use Pomodoro 25/5 rule",
        "Track your 3 main tasks",
    ],
    "Better Sleep": [
        "Avoid screens 30 mins before sleep",
        "Maintain fixed sleep schedule",
        "Keep bedroom cool and dark",
    ],
};

export default function Suggestions() {
    const router = useRouter();
    const { goal } = useLocalSearchParams();

    const suggestions = habitSuggestions[goal as string] || [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{goal} Habits</Text>

            {suggestions.map((item: string, index: number) => (
                <Text key={index} style={styles.suggestion}>
                    ✅ {item}
                </Text>
            ))}

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Text style={styles.backText}>← Back to Goals</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    suggestion: {
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
    },
    backButton: {
        marginTop: 30,
        alignSelf: "center",
    },
    backText: {
        fontSize: 18,
        color: "#007bff",
    },
});
