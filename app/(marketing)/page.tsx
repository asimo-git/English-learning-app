import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[980px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] mb-8 lg:mb-0">
        <Image src="/giraffe.png" fill alt="giraffe" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl font-bold text-center">Learn with us!</h1>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" forceRedirectUrl="/learn">
              <Button size="lg" variant="default" className="w-full">
                Get started
              </Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              signUpFallbackRedirectUrl="/learn"
              forceRedirectUrl="/learn"
            >
              <Button size="lg" variant="outline" className="w-full">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href="/learn">Continue learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
