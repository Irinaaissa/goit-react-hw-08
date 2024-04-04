import PageTitle from "../components/PageTitle/PageTitle";

export default function Home() {
  return (
    <div>
      <PageTitle>
        Task manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        <div> </div>
        <p>
          This is a phone book. With which you can add contacts and delete
          contacts. To use its functions you need to register.
        </p>
      </PageTitle>
    </div>
  );
}
