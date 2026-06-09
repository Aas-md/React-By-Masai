import './profileCard.css';

export default function ProfileCard({
  name = "John Doe",
  age = 30,
  bio = "bio",
}) {

    bio = bio.substring(0,50) + "...."

  return (

   
    <div className="card">
      <h1 className="name">{name}</h1>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}
