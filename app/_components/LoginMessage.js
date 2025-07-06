import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 p-4 sm:p-6 lg:p-8">
      <p className="text-center text-base sm:text-lg lg:text-xl py-8 sm:py-10 lg:py-12 self-center leading-relaxed">
        Please{" "}
        <Link
          href="/login"
          className="underline text-accent-500 hover:text-accent-400 transition-colors"
        >
          login
        </Link>{" "}
        to reserve this
        <br className="hidden sm:inline" />
        cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
