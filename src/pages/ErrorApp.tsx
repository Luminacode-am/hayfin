import Errors from "../components/Errors";

function ErrorApp() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg">
      <main className="flex-grow">
        <Errors />
      </main>
    </div>
  );
}

export default ErrorApp;