export type User = {
    id: string;
    name: string;
    roles: string[];
    token: string;
};

export type Settings = {
    isDarkTheme: boolean;
    languageSelected: string;
};