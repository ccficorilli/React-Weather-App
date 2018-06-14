import React from 'react';

class SearchHistory extends React.Component {

    render(){
        return(
            <div className="history-container">
                <div className="label">Search History</div>
                <div className="history-display">
                    <div className="history-row">
                        <div className="prev-city">last city</div>
                        <div className="date-searched">
                            <div className="date">01/01/2001</div>
                            <div className="time">05:05:55</div>
                        </div>
                    </div>
                    <div className="history-row">
                        <div className="prev-city">last city</div>
                        <div className="date-searched">
                            <div className="date">01/01/2001</div>
                            <div className="time">05:05:55</div>
                        </div>
                    </div>
                    <div className="history-row">
                        <div className="prev-city">last city</div>
                        <div className="date-searched">
                            <div className="date">01/01/2001</div>
                            <div className="time">05:05:55</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
}
export default SearchHistory;