"use client";
import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from "@/components/ui/button";


const LoginPage = () => {
    return (<div
            className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <div className="flex items-center justify-center">
                    <Button
                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
                        type="button"
                        onClick={() => signIn('google', {callbackUrl: '/'})}
                    >
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
