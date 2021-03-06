const jobDetail = Vue.component('job-detail', {
  props: ['job'],
  methods: {
    formatDate(date){
      return moment(date).format('DD-MM-YYYY HH:mm:ss')
    }
  },
  template: `
  <div class="modal fade" id="modalData" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <!-- Modal -->
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Job Data</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <code> {{job.job.data}}</code>
          <div v-if='job.failed' class="row mt-3">
            <div class="col pt-3 bg-danger text-light">
                <p><strong>Fail Count:</strong> {{job.job.failCount}}</p>
                <p><strong>Failed At:</strong> {{formatDate(job.job.failedAt)}}</p>
                <p><strong>Reason:</strong> {{job.job.failReason}}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `
})
