import React, { Component } from "react";
import { connect } from "react-redux";
import pickBy from 'lodash/pickBy';
import keys from 'lodash/keys';
import mapValues from 'lodash/mapValues';

import Row from "./Row";
import Checkbox from "./Checkbox";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkBoxControl : {},
      isCheckedAll : false
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e, checkAll) {
    let currentState = this.state.checkBoxControl
    if(checkAll){
      currentState = mapValues(currentState, () => !this.state.isCheckedAll);
      this.setState({
        isCheckedAll: !this.state.isCheckedAll
      })
    }else{
      const uid = e.target.value;
      if(!this.state.isCheckedAll){
        currentState[uid] = !currentState[uid]
      }
    }

    this.setState({
      checkBoxControl: currentState
    })
    this.props.selectedUser(keys(pickBy(currentState)))
  }

  componentWillReceiveProps(props) {
    if(!props.userList.data.length){
      return false
    }
    const data = props.userList.data
    const checkBoxControl = {}
    //DATA[KEY] = 1. user data [key].İd = 1.user ın İd sİ 
    // Ben böyle bir işlem yaptıgımda donduden cıkamıyorum. Tum ıslemlerımı dongude bıtırmek zorunda kalıyorum.
    // Sen burada donguden nasıl cıktın O NEDEMEK NEDEN CAPS KALDI BENDE YAasdasdasd heh
    // Ben sanıyordum ki dongude olusturduugm seyi dongu dısında erısemem sen bunnn ıcını
    // checkBoxControl dongu ıcerısınde olusturuyosun bro ama state kısmın
    // abi döngü out of scope birşey değilki kendi içerisinde ayrı bi function açmıyo yani aynı scope da
    // anda cok iyi dimi neey genel :D böyle her seye erısıp acıp kapatıyosun felan 
    // ne guzel seyler ya sdfg lodash ı nerden calısabılırım anda ben boyle lan bunu nasıl yaparım dedıgımde
    // aklıma lodash gelmeli 
    // bende yeni sayılırım lodash de pek öyle ahım şahım bilgim yok ama 
    // genelde stack overflow da bulduğum cevaplar
    // su dun attıgım todo seyıne baktın mı adam lodahs kullanmıs eet guzeldı
    for(var key in data){
      checkBoxControl[data[key].id] = false
    }

    this.setState({
      checkBoxControl : checkBoxControl
    })
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-block">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>
                    <Checkbox
                      onChange={(e) => this.handleSelect(e, true)} 
                      checked={this.state.isCheckedAll}
                    />
                  </th>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userList.data.map((user, i) => (
                  <Row
                    key={i}
                    handleSelect={this.handleSelect.bind(this)}
                    details={user}
                    selected={this.state.checkBoxControl[user.id]}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.users
  };
}

export default connect(mapStateToProps)(Table);
