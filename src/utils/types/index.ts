export type User = {
    id: string;
    name: string;
    surname: string;
    email: string;
    sex: string;
    password: string;
    role: string;
    privacyAccepted: boolean;
};

export type Settings = {
    isDarkTheme: boolean;
    languageSelected: string;
    accountRegistered: User[];
};