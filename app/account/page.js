import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-accent-400 mb-4 sm:mb-6 lg:mb-7 px-2 sm:px-0">
      Welcome, {firstName}
    </h2>
  );
}
