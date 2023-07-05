import axios from 'axios';

export default function Contacts({ contacts }) {
  return (
    <div>
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      'https://api.gohighlevel.com/v1/contacts',
      {
        headers: {
          Authorization: 'API_KEY:API_SECRET',
        },
      }
    );

    const contacts = response.data.data;

    return {
      props: {
        contacts,
      },
    };
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return {
      props: {
        contacts: [],
      },
    };
  }
}
