import React, { Component } from "react";
import history from "../history";
import "../styles/OfferItem.css";
import "regenerator-runtime/runtime";
class OfferItem extends Component {
  handleGetOfferPage(value) {
      history.push(`/offer?id=${value}`);
  }
  render() {
    
    return (
      <div className="container-offer-item">
        <div className="container-offer-item-column">
            <div className="image-container">
                <img className="image-container-image" src={this.props.data.organization.logo} alt={this.props.data.organization.name} title={this.props.data.organization.name} />
            </div>
            <div className="offer-item-name-mobile">
                «{this.props.data.name}»
            </div>
            <div className="offer-item-license-mobile">
            лиц. № {this.props.data.organization.license}
            </div>
        </div>
        <div className="container-offer-item-column">
            <div className="offer-item-mobile-subtitle">
                Ставка
            </div>
            <div className="offer-item-rate">
                {this.props.data.rate.periods[0].rate.from == this.props.data.rate.periods[0].rate.to ? 
                `${this.props.data.rate.periods[0].rate.from} %` : `от ${this.props.data.rate.periods[0].rate.from} %`}
            </div>
            <div className="offer-item-subtitle">
                «{this.props.data.name}»
            </div>
        </div>
        <div className="container-offer-item-column">
            <div className="offer-item-mobile-subtitle">
                Сумма
            </div>
            <div className="offer-item-sum">
            {typeof this.props.data.rate.creditAmount.to == 'undefined' ? 
            `от ${this.props.data.rate.creditAmount.from} ₽` : `${this.props.data.rate.creditAmount.from} ₽ - ${this.props.data.rate.creditAmount.to} ₽`}
            </div>
            <div className="offer-item-subtitle">
                На срок до {this.props.data.rate.periods[0].term.to / 12} {this.props.data.rate.periods[0].term.to / 12 == 1 ? `года` : `лет`} 
            </div>
        </div> 
        <div className="container-offer-item-column">
            <div className="offer-item-subtitle">
                Возраст от {this.props.data.customerRequirements.age} года
            </div>
            <div className="offer-item-subtitle">
                Стаж от {this.props.data.customerRequirements.lastExperience} месяцев
            </div>
            <div className="offer-item-subtitle">
                {this.props.data.customerRequirements.documents} {this.props.data.customerRequirements.documents == 1 ? `документ` : `документа`}
            </div>
        </div>   
        <div className="container-offer-item-column">
            <div className="offer-item-license">
            лиц. № {this.props.data.organization.license}
            </div>
            <div className="offer-item-subtitle offer-item-button-container">
                <button className="offer-item-button" onClick={() =>
                this.handleGetOfferPage(this.props.data.id)
              }>
                    Показать условия
                </button>
            </div>
        </div>   
      </div>
    );
    
  }
}

export default OfferItem;
