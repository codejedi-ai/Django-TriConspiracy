"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-8">
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 mb-6 relative">
                  <Image
                    src="logo.svg"
                    alt="DKK Logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  Sign In to DKK
                </h1>
                <p className="text-gray-400 text-center">
                  Join the community of passionate hackers and tech enthusiasts
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-500">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className="bg-gray-800 text-white border-gray-700 focus:ring-primary focus:border-primary"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-gray-500">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    className="bg-gray-800 text-white border-gray-700 focus:ring-primary focus:border-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary-dark"
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                <p className="text-gray-500 text-sm">
                  By signing in, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
