import React from "react";
import PropTypes from 'prop-types'; 
import { ApiClient } from 'react-api-client'
import Select from 'react-select'

class CourseSelect extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            department:null,
            course:null,
            courses:[],
            _loading: false,
        }
        this.options = [
            {value: 'd1', label: 'd1'},
            {value: 'd2', label: 'd2'},
            {value: 'd3', label: 'd3'}
        ];
        this.course_options = [
            {value: 'c1', label: 'c1'},
            {value: 'c2', label: 'c2'},
            {value: 'c3', label: 'c3'}
        ];
    }

    
    static propTypes = {
        department: PropTypes.string,
        course: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    };
    componentWillReceiveProps(update){
        this.setState({
            department:update.department,
            course:update.course            
        });

    }
    onSelectDepartment  =(evt) =>{
        console.log(evt);
        const department=evt.value;
        const course=null;
        this.setState({

            department,
            course,


        });
        // this.props.onChange({name:'department',value:department});
        // this.props.onChange({name:'course',value:course});

        if(department) this.fetch(department);
    };
    onSelectCourse  =(evt) =>{
        const course=evt.value;
        this.setState({course});
        this.props.onChange({name:'course',value:course});

    };
    fetch = (department) => {
        this.setState({_loading:true,course:[]});
        ApiClient(department).then((courses) => {
            this.setState({
                _loading:false,
                courses:courses            
            });

        });
    };
    onChange (evt) {
        
        // const name = this.props.name;
        const value = evt.target.value;
        // console.log(value);
    }
    renderDepartmentSelect =() =>{
        return   <Select
        value={this.options.filter(({value}) => value === this.state.department)}
        onChange={this.onSelectDepartment}
        options={this.options}
      />
    }
    renderCourseSelect =() =>{
        return   <Select
        value={this.course_options.filter(({value}) => value === this.state.course)}
        onChange={this.onSelectCourse}
        options={this.course_options}
      />
    }
    render(){
        return(
            <div>
                {this.renderDepartmentSelect()}
                <br/>
                {this.renderCourseSelect()}
                <br/>
                {this.onSelectCourse}
            </div>

        );
    }
}

export default CourseSelect;