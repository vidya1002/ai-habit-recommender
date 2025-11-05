import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const goals = [
    "Fitness",
    "Study",
    "Mental Health",
    "Productivity",
    "Better Sleep",
];

export default function Home() {
    const router = useRouter();

    const handleGoalPress = (goal: string) => {
        router.push({
            pathname: "/Suggestions",
            params: { goal },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>AI Habit Recommender</Text>
            <Text style={styles.subtitle}>Select a goal to get personalized habit suggestions</Text>

            {goals.map((goal) => (
                <TouchableOpacity
                    key={goal}
                    style={styles.button}
                    onPress={() => handleGoalPress(goal)}
                >
                    <Text style={styles.buttonText}>{goal}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 6,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});
