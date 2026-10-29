interface RequiredScores {
    math: number,
    english: number,
    science: number,
} 

interface Scores extends RequiredScores {
    [subject: string]: number
} 

const scores: Scores = {
    math: 95,
    english: 90,
    science: 75,
}

scores.athlethics = 100;
scores.french = 75;
scores.spanish = 70;
