import React from 'react'

const CreateWorkitem = ({ issueNumber }) => (
  <div>
    {/* Button  */}
    <button
      type="button"
      className="btn btn-secondary"
      style={{display: 'block', margin: '0 auto'}}
      data-toggle="modal"
      data-target="#createWorkitem"
    >
      Create Work Item
    </button>

    {/* Modal */}
    <div className="modal fade" id="createWorkitem" tabIndex="-1" role="dialog" aria-labelledby="createWorkitemLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createWorkitemLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>This will be issue number {issueNumber}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  </div>
)

export default CreateWorkitem;