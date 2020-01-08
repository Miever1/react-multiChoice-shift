import React, { Component } from "react"


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkboxItems: [
                { content: "A ", checked: false },
                { content: "B ", checked: false },
                { content: "C ", checked: false },
                { content: "D ", checked: false },
                { content: "E ", checked: false },
                { content: "F ", checked: false },
                { content: "G ", checked: false },
                { content: "H ", checked: false },
                { content: "I ", checked: false },
                { content: "J ", checked: false },
                { content: "K ", checked: false },
            ],

            checkedItems: [],
        }
    }

    render() {
        return (
            <div className="light">
                <div className="main-box">
                    <ul className="left-selected">
                        {
                            this.state.checkboxItems.map((ele, index) => {
                                return (
                                    <li key={index} id={"item" + index} onClick={() => this.leftItemClick(index)} className={ele.checked ? "item active" : "item"}>
                                        <input type="checkbox" name="items" checked={ele.checked} onChange={() => this.getVal(index)} />
                                        <label>{ele.content}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="middle-convert">
                        <button onClick={this.leftMove}><i className="icon-arrow-right"></i></button>
                        <button onClick={this.rightMove}><i className="icon-arrow-left"></i></button>
                    </div>

                    <ul className="right-selected">
                        {
                            this.state.checkedItems.map((ele, index) => {
                                return (
                                    <li key={index} onClick={() => this.rightItemClick(index)} className={ele.checked ? "item active" : "item"} >
                                        <input type="checkbox" name="checkedItems" checked={ele.checked} onChange={() => this.getSelected(index)} />
                                        <label>{ele.content}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    getVal = (index) => {
        let items = [...this.state.checkboxItems];
        items[index].checked = !items[index].checked;
        this.setState({
            checkboxItems: items
        })
    }

    leftItemClick = (index) => {
        let items = [...this.state.checkboxItems];
        items[index].checked = !items[index].checked;
        this.setState({
            checkboxItems: items
        })

    }

    rightItemClick = (index) => {
        let items = [...this.state.checkedItems];
        items[index].checked = !items[index].checked;
        this.setState({
            checkedItems: items
        })
    }

    getSelected = (index) => {
        let items = [...this.state.checkedItems];
        items[index].checked = !items[index].checked;
        this.setState({
            checkedItems: items
        })
    }

    leftMove = () => {
        let items = [...this.state.checkboxItems];
        let selectedItems = [...this.state.checkedItems];
        let notSelect = [];
        items.map(item => {
            if (item.checked === true) {
                item.checked = false;
                return selectedItems.push(item);
            }
            else {
                return notSelect.push(item);
            }
        })

        this.setState({
            checkedItems: selectedItems,
            checkboxItems: notSelect,
        })
    }

    rightMove = () => {
        let items = [...this.state.checkboxItems];
        let selectedItems = [...this.state.checkedItems];
        let notSelect = [];
        selectedItems.map(item => {
            if (item.checked === true) {
                item.checked = false;
                return items.push(item);
            }
            else {
                return notSelect.push(item);
            }
        })

        this.setState({
            checkedItems: notSelect,
            checkboxItems: items,
        })

    }
}

export default Main