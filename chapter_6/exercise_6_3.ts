const scores: {[key: string]: number} = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

interface Scores {
    [key: string] : number;
}

type TypeScores = {
    [key: string] : number;
}

const scores_two: Record<string, number> = {};
