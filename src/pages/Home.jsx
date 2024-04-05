import PageTitle from "../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <PageTitle>
        <div>
          <p>
            This is a phone book. With which you can add and delete contacts. If
            necessary you can search contacts by phone number or subscriber
            name. To use its features, you need to <Link to="/register">register</Link> or <Link to="/login">log in</Link> using your
            login (if you already have a registration).
          </p>
        </div>
      </PageTitle>
    </div>
  );
}
