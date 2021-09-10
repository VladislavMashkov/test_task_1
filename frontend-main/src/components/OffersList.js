import React, { Component } from "react";
import history from "../history";
import "regenerator-runtime/runtime";
import OfferItem from "./OfferItem.js";
class OffersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      numberOfOffers: 10,
      isLoading: true,
    };
  }
  handleClick(){
    this.setState({numberOfOffers: (this.state.numberOfOffers+10 >= this.state.data.length ? this.state.data.length : this.state.numberOfOffers+10)})
  }
  handleSortRate(){
    this.setState({data: this.state.data.sort((first, second) => {return first.rate.periods[0].rate.from - second.rate.periods[0].rate.from})});
    this.setState({numberOfOffers: 10});
  }
  handleSortSum(){
    let dataWithoutHighBorderOfCreditAmount = this.state.data.filter(objectElement => typeof objectElement.rate.creditAmount.to == 'undefined');
    dataWithoutHighBorderOfCreditAmount = dataWithoutHighBorderOfCreditAmount.sort((first, second) => {return first.rate.creditAmount.from - second.rate.creditAmount.from})
    let dataWithHighBorderOfCreditAmount = this.state.data.filter(objectElement => typeof objectElement.rate.creditAmount.to != 'undefined');
    let sortedData = dataWithoutHighBorderOfCreditAmount.concat(dataWithHighBorderOfCreditAmount.sort((first, second) => {return first.rate.creditAmount.from - second.rate.creditAmount.from}).reverse());
    this.setState({data: sortedData});
    this.setState({numberOfOffers: 10});
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:3006/getData");
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
    if (this.state.data.length == this.state.numberOfOffers) {
      return (
        <div className="container">
        <div class="container-filter-form">
          <div className="container-filter-form-text">
            Сортировать:
          </div>
          <div className="container-filter-form-sort" onClick={()=>this.handleSortRate()}>
            по ставке
          </div>
          <div className="container-filter-form-sort" onClick={()=>this.handleSortSum()}>
            по сумме
          </div>
        </div>
        {this.state.data.slice(0, this.state.numberOfOffers).map(offerData =>
                    <OfferItem key={offerData.id} data={offerData}/>
        )}
        </div>
      )
    }
    return (
      <div className="container">
        <div class="container-filter-form">
          <div className="container-filter-form-text">
            Сортировать:
          </div>
          <div className="container-filter-form-sort" onClick={()=>this.handleSortRate()}>
            по ставке
          </div>
          <div className="container-filter-form-sort" onClick={()=>this.handleSortSum()}>
            по сумме
          </div>
        </div>
        {this.state.data.slice(0, this.state.numberOfOffers).map(offerData =>
                    <OfferItem key={offerData.id} data={offerData}/>
        )}
        <div className="btn-show-more" onClick={()=>this.handleClick()}>
          Показать еще {this.state.numberOfOffers} из {this.state.data.length}
        </div> 
      </div>
    );
    
  }
}

export default OffersList;
