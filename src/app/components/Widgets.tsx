export default function Widgets() {
  const contacts = [
    { id: 1, name: 'User 1', online: true },
    { id: 2, name: 'User 2', online: false },
    { id: 3, name: 'User 3', online: true },
  ];

  return (
    <div className="bg-gray-100 p-4 w-1/4 h-screen">
      <h3 className="font-bold mb-4">Contacts</h3>
      {contacts.map((contact) => (
        <div key={contact.id} className="flex items-center space-x-2 mb-2">
          <div className={`w-2 h-2 rounded-full ${contact.online ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          <span>{contact.name}</span>
        </div>
      ))}
    </div>
  );
}
