import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "./styles";
import { AuthContext } from "../../providers/AuthProvider";
import Vector from "../../assets/delete.jpg"
import ContactModal from "../../components/modal";

interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string
}

interface Client{
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string
}

export const Dashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { client } = useContext(AuthContext);
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get<Contact[]>('contacts');
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContacts();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddContact = (newContact: Contact) => {
    api
      .post('contacts', newContact)
      .then((response) => {
        console.log('Novo contato adicionado:', response.data);
        const updatedContacts = [...contacts, response.data];
        setContacts(updatedContacts);
        closeModal();
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao adicionar o contato', error);
      });
  };

  const handleDeleteContact = (contactId: string) => {
    api
      .delete(`contacts/${contactId}`)
      .then((response) => {
        console.log('Contato removido com sucesso!', response.data);
        const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
        setContacts(updatedContacts);
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao remover o contato', error);
      });
  };

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const contactId = event.currentTarget.getAttribute('data-contact-id');
    if (contactId) {
      handleDeleteContact(contactId);
    }
  };

  const handleDeleteUser = () => {
    console.log(client?.id)
    api
      .delete(`clients/${client?.id}`)
      .then((response) => {
      
        console.log('Usuário excluído com sucesso!', response.data);
        localStorage.clear(); 
        navigate('/'); 
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao excluir o usuário', error);
      });
  };

  const cleanStorage = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <DashboardContainer>
      <div className="nav">
        <button onClick={cleanStorage} className="buttonOut">
          Sair
        </button>
        <div>
        <button className="buttonAdd" onClick={openModal}>
          Adicionar Contato
        </button>
        <button className="buttonDelete" onClick={handleDeleteUser}>
          Deletar Usuário
        </button>
        </div>
        
      </div>
      <div className="divMain">
        <div className="contactTitle">
          <h2>Olá, {client?.name}</h2>
          <p>Email: {client?.email}</p>
          <p>Telefone: {client?.phone}</p>
        </div>
        <h2>Contatos</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}
              <button className="delete" data-contact-id={contact.id} onClick={handleDeleteButtonClick}>
                <img alt="" className="trash" src={Vector} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddContact} />
      )}
    </DashboardContainer>
  );
};