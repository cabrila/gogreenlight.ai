import Image from "next/image";

export function TrustBanner() {
  return (
    <section className="bg-card/80 border-y border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <p className="text-sm text-muted-foreground">
            Proud members of the MovieLabs Industry Forum
          </p>
          <Image
            src="/images/movielabs-industry-forum-logo.png"
            alt="MovieLabs Industry Forum Member"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
