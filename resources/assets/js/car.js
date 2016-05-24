//fonction pour redirect sur page compte a rebourss
var CompteARebours = React.createClass({
	getInitialState: function(){
	 	return {query: ''}
	 },
	 queryChange: function(evenement){
	 	this.setState({query: evenement.target.value});
	 },

	 lien: function(){
	 	return this.state.query+'/car.html';
	 },
    render: function() {
        return (
            <div className="bouton">
                <a href={this.lien()} id="car" className="waves-effect waves-light btn grey">
                <i className="material-icons right">alarm_on</i>Compte à rebours</a>
            </div>
        );
    }
});