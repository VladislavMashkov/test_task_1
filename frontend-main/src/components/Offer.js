import React, { Component } from "react";
import history from "../history";
import "../styles/Offer.css";
import "regenerator-runtime/runtime";
class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {},
          isLoading: true,
        };
      }
    handleGetMainPage() {
        history.push(`/`);
    }
    async componentDidMount() {
        let params = (new URL(document.location)).searchParams;
        let id = params.get('id')
        const response = await fetch(`http://localhost:3006/getOfferInfo?id=${id}`);
        const data = await response.json();
        this.setState({data: data});
        this.setState({isLoading: false});
    }
    render() {
    if(this.state.isLoading) {
        return (
            <div className="container"></div>
        )
    }
    return (      
      <div className="container">
            <div className="container-back-to-list" onClick={() => this.handleGetMainPage()}>
                Назад к объявлениям
            </div>
            <div className="offer-title">
                Ипотека «{this.state.data.name}» от Банка {this.state.data.organization.name}
            </div>
            <div className="offer-header">
                <div className="image-container">
                    <img className="image-container-image" src={this.state.data.organization.logo} alt={this.state.data.organization.name} title={this.state.data.organization.name} />
                </div>
                <div className="header-offer-item-license">
                        лиц. № {this.state.data.organization.license}
                </div>
            </div>
            <div className="offer-main">
                <div className="offer-column-item">
                    <div className="offer-column-item-name">
                        Процентная ставка
                    </div>
                    <div className="offer-column-item-value">
                    {this.state.data.rate.periods[0].rate.from == this.state.data.rate.periods[0].rate.to ? 
                `${this.state.data.rate.periods[0].rate.from} %` : `от ${this.state.data.rate.periods[0].rate.from} % - ${this.state.data.rate.periods[0].rate.to} %`}
                    </div>
                </div>
                <div className="offer-column-item">
                    <div className="offer-column-item-name">
                        Сумма по кредиту
                    </div>
                    <div className="offer-column-item-value">
                    {typeof this.state.data.rate.creditAmount.to == 'undefined' ? 
                    `от ${this.state.data.rate.creditAmount.from} ₽` : `${this.state.data.rate.creditAmount.from} ₽ - ${this.state.data.rate.creditAmount.to} ₽`}
                    </div>
                </div>
                <div className="offer-column-item">
                    <div className="offer-column-item-name">
                        Срок
                    </div>
                    <div className="offer-column-item-value">
                        {`${this.state.data.rate.periods[0].term.from / 12} - ${this.state.data.rate.periods[0].term.to / 12} лет`}
                    </div>
                </div>
                <div className="offer-column-item">
                    <div className="offer-column-item-name">
                        Первоначальный взнос
                    </div>
                    <div className="offer-column-item-value">
                    {typeof this.state.data.rate.initialAmount.to == 'undefined' ? 
                `от ${this.state.data.rate.initialAmount.from} %` : `от ${this.state.data.rate.initialAmount.from} % - ${this.state.data.rate.initialAmount.to} %`}
                    </div>
                </div>
                <div className="offer-column-item">
                    <div className="offer-column-item-name">
                        Стаж работы на последнем месте
                    </div>
                    <div className="offer-column-item-value">
                        {this.state.data.customerRequirements.lastExperience < 5 ? `${this.state.data.customerRequirements.lastExperience} месяца` : `${this.state.data.customerRequirements.lastExperience} месяцев`}
                    </div>
                </div>
                <div className="offer-column-item">
                    <div className="offer-column-item-name">
                        Возраст заемщика
                    </div>
                    <div className="offer-column-item-value">
                    от {this.state.data.customerRequirements.age} года
                    </div>
                </div>
            </div>
          </div>
      
    );
    
  }
}

export default Offer;
