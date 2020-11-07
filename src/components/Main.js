import React from 'react';
import Card from './Card.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, userName, userDescription, userAvatar, cards, onCardClick, onDeteteCardClick}) {
    return(
        <main className="main">
            <section className="profile main__profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя." />
                    <div className="profile__avatar-cover">
                        <button type="button" name="avatar-edit-button" className="profile__avatar-edit" onClick={onEditAvatar}></button>
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" name="edit-button" className="profile__edit-button" onClick={onEditProfile}></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button type="button" name="add-button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card 
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}
                    onDeteteCardClick={onDeteteCardClick}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;