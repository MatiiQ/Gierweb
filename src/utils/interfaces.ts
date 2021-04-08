export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
}
export interface IGame {
    id: number;
    game_name: string;
    developer: string;
    genre: string;
    platform: string[];
    release_date: string;
    sold: number;
    players_number: number;
    positive_reviews: number;
}