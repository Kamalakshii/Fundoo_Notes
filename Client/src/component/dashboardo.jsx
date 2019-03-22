
import React, { Component } from 'react';
import CreateNote from '../components/createNotes';
import Notes from '../components/notes';
import AppbarComponent from '../components/appBar';
export default class dashBoard extends Component {
    constructor() {
        super();
        this.state = {
            cardStyles: false,
            slideCards: false,

            label: "",
            reminder: false,
            archive: false,
            trash: false,
            searchNote: ""
        }
        this.noteToCards = React.createRef();
        this.handleCardStyle = this.handleCardStyle.bind(this);
        this.slideCards = this.slideCards.bind(this);
        this.getNewNote = this.getNewNote.bind(this);

        this.handleNavigation = this.handleNavigation.bind(this);
        this.getSearchedNotes = this.getSearchedNotes.bind(this);
    }
    /**
     * @description:it performs the card action
     */
    slideCards() {
        try {
            this.setState({ slideCards: !this.state.slideCards })
        } catch (err) {
            console.log("error at slideCards in dashBoard");
        }
    }
    /**
     * @description:it handles the cards style
     */
    handleCardStyle() {
        try {
            this.setState({ cardStyles: !this.state.cardStyles });
        } catch (err) {
            console.log("error at handleCardStyle in dashBoard");
        }
    }
    /**
     * @description:it display the new note
     * @param {*get new card or note} newCard 
     */
    getNewNote(newCard) {
        try {
            this.noteToCards.current.displayNewCard(newCard);
        } catch (err) {
            console.log("error at getNewNote in dashBoard");
        }
    }


    searchLabels(value) {
        this.setState({ label: value });
        console.log("search labels", value);
        this.noteToCards.current.displayLabelledCards();
    }


    getSearchedNotes(value) {
        this.setState({ searchNote: value })
    }


    handleNavigation(reminder, archive, trash) {
        console.log("handleNAvigation", reminder, archive, trash);
        if (reminder === true || archive === true || trash === true) {

            this.setState({
                reminder: reminder,
                archive: archive,
                trash: trash
            })
        } else {
            this.setState({
                reminder: false,
                archive: false,
                trash: false
            })
        }
    }

    makeLabelFalse() {
        this.noteToCards.current.makeLabelFalse();
    }

    render() {
        const slidingCards = this.state.slideCards ? "afterSlide" : "beforeSlide"
        return (
            <div className={slidingCards}>
                <div >
                    <AppbarComponent
                        props={this.props}
                        slideCards={this.slideCards}
                        notePropsToApp={this.handleCardStyle}

                        makeLabelFalse={this.makeLabelFalse}
                        searchLabels={this.searchLabels}
                        handleNavigation={this.handleNavigation}
                        getSearchedNotes={this.getSearchedNotes}
                    />
                </div>
                <div className="setFixedMargin">
                    <div id="dashboard">
                        <CreateNote
                            getNewNote={this.getNewNote}
                        />
                        <Notes
                            noteProps={this.state.cardStyles}
                            ref={this.noteToCards}

                            searchNote={this.state.searchNote}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
