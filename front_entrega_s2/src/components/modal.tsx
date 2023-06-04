import React, { useState } from 'react';
import { ModalContainer } from './styles';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (contact: Contact) => void;
}

export const ContactModal = ({ isOpen, onClose, onSubmit }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: '',
      name,
      email,
      phone,
    };
    onSubmit(newContact);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <ModalContainer>
      <div className="modalContent">
        <h2>Adicionar Contato</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <div className="modalButtons">
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default ContactModal;