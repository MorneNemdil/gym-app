"use server";

import { AppwriteException, ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
    try {
        console.log('------------------------- SIGNING IN -------------------------');
        
        const { accountsManager } = await createAdminClient();

        const response = await accountsManager.createEmailPasswordSession(email, password);
        console.log('Response:', response);

        cookies().set("appwrite-session", response.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(response);
    } catch (error: AppwriteException | unknown) {
        console.error('Error during sign-in:', error);
        return (error as AppwriteException).type;
    }
}


export const signUp = async (userData: SignUpParams) => {
    try {
        console.log('------------------------- SIGNING UP AND IN -------------------------');
        const { accountsManager, databaseManager } = await createAdminClient();
        console.log('ATTRIBUTES:', userData)

        const newUserAccount = await accountsManager.create(
            ID.unique(),
            userData.email,
            userData.password,
            `${userData.firstName} ${userData.lastName}`
        );
        const session = await accountsManager.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        const { confirmPassword, ...userDbData } = userData; 

        const dbResult = await databaseManager.createDocument(
            process.env.APPWRITE_DATABASE_ID!,
            process.env.APPWRITE_USERS_COLLECTION_ID!,
            ID.unique(),
            {...userDbData}
        );
        console.log("DB_CREATE_DOC_RESULT: ", dbResult);

        return parseStringify(newUserAccount);
    } catch (error) {
        console.error('Error', error)
    }
}

export async function getLoggedInUser() {
    try {
        const { accountsManager } = await createSessionClient();
        const user = await accountsManager.get();
        return parseStringify(user);
    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        console.log('------------------------- LOGGING OUT -------------------------');
        const { accountsManager } = await createSessionClient();
        
        console.log("DELETING SESSION FROM COOKIES")
        cookies().delete('appwrite-session');

        console.log("DELETING SESSION FROM SERVER")
        await accountsManager.deleteSession('current');
        
        console.log('Session deleted');
    } catch (error) {
        console.error('Error during logout:', error);
        return null;
    }
}
