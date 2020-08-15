import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class UploadPDF extends React.Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: '',
            filename: 'Choose File'
        };
    }

    componentDidMount() {

    }

    onSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('notice', this.state.file);

        try {
            await axios.post('/upload/pdf/notice', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            this.props.setPdfPath(`../../../../../backend/uploads/pdf/notices/${this.state.filename}`);
            console.log('Reached 35' + this.props.path);
        } 
        catch (err) {
            if (err.response.status === 500) {
            alert('There was a problem with the server');
            console.log(err);
            } else {
            alert(err.response.data.msg);
            }
        }  //Path may change with the file structure
    };

    changeHandler = (e) => {
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name
        });
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit} enctype="multipart/form-data" id='form'>
                <div className='custom-file mb-4 row'>
                    <div className="col-9">
                        <input type="file" name="notice" required={true} onChange={this.changeHandler} placeholder="Upload PDF" className='custom-file-input' />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {this.state.filename}
                        </label>
                    </div>
                    <div className="col-3">
                        <input type='submit' value='Upload' className='btn btn-primary' />
                    </div>
                </div>
            </form>
        )
    }
}

export default UploadPDF;