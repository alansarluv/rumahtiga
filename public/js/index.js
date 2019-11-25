const calculateAge = () => {
  let targetAge = document.getElementsByClassName('jc-auto-age');
  if (targetAge.length) {
    const dataLink = targetAge[0].getAttribute('data-target');
    const dateElm = document.querySelector("input[type='date'][data-link='"+dataLink+"']");
    dateElm.addEventListener('change', function(ev, targetAge){
      const today = new Date();
      const birthDate = new Date(this.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      targetAge = document.querySelector(".jc-auto-age[data-target='"+this.getAttribute('data-link')+"']")
      targetAge.innerHTML = age;
    });
  }
};

const updateScore = (wrapperEl, formType) => {
  const totalElm = wrapperEl.getElementsByClassName('total-form')[0];
  if (formType === 'bicara') {
    const totalTidakBenar = wrapperEl.querySelectorAll("input[type='radio'][value='tb']:checked").length * 2;
    const totalAgakBenar = wrapperEl.querySelectorAll("input[type='radio'][value='ab']:checked").length * 1;
    const totalVal = totalTidakBenar + totalAgakBenar;
    totalElm.value = totalVal;
  } else if (formType === 'sosial') {
    const totalAgakCocok = wrapperEl.querySelectorAll("input[type='radio'][value='ac']:checked").length * 1;
    const totalSangatCocok = wrapperEl.querySelectorAll("input[type='radio'][value='sc']:checked").length * 2;
    const totalVal = totalSangatCocok + totalAgakCocok;
    totalElm.value = totalVal;
  } else if (formType === 'sensorik') {
    const totalTidakCocok = wrapperEl.querySelectorAll("input[type='radio'][value='tc']:checked").length * 2;
    const totalAgakCocok = wrapperEl.querySelectorAll("input[type='radio'][value='ac']:checked").length * 1;
    const totalVal = totalTidakCocok + totalAgakCocok;
    totalElm.value = totalVal;
  } else if (formType === 'umum') {
    const totalSedikitBermasalah = wrapperEl.querySelectorAll("input[type='radio'][value='sb']:checked").length * 1;
    const totalCukupBermasalah = wrapperEl.querySelectorAll("input[type='radio'][value='cb']:checked").length * 2;
    const totalSangatBermasalah = wrapperEl.querySelectorAll("input[type='radio'][value='vb']:checked").length * 3;
    const totalVal = totalSedikitBermasalah + totalCukupBermasalah + totalSangatBermasalah;
    totalElm.value = totalVal;
  }
  
}

const convertScore = () => {
  const spanElm = document.getElementsByClassName('jc-convert-score');
  if (spanElm.length){
    for(let el of spanElm) {
      const dataForm = el.getAttribute('data-form');
      const val = el.textContent;
      let res;
      if (dataForm === "1") {
        switch(val) {
          case "tb": 
            res = "Tidak benar (2)";
            break;
          case "ab":
            res = "Agak benar (1)";
            break;
          case "sb":
            res = "Sangat benar (0)";
            break;
        }
      } else if (dataForm === "2") {
        switch(val) {
          case "tc": 
            res = "Tidak cocok (0)";
            break;
          case "ac":
            res = "Agak cocok (1)";
            break;
          case "sc":
            res = "Sangat cocok (2)";
            break;
        }
      } else if (dataForm === "3") {
        switch(val) {
          case "tc": 
            res = "Tidak cocok (2)";
            break;
          case "ac":
            res = "Agak cocok (1)";
            break;
          case "sc":
            res = "Sangat cocok (0)";
            break;
        }
      } else if (dataForm === "4") {
        switch(val) {
          case "tb": 
            res = "Tidak bermasalah (0)";
            break;
          case "sb":
            res = "Sedikit bermasalah (1)";
            break;
          case "cb":
            res = "Cukup bermasalah (2)";
            break;
          case "vb":
            res = "Sangat bermasalah (3)";
            break;
          }        
      }
      el.innerHTML = res;
    }
  }
}

const selectedRadio = () => {
  const listAtecFormRadio = document.querySelectorAll(".atec-form-style input[type='radio']");
  listAtecFormRadio.forEach(el => {
    el.addEventListener("change", function(e){
      const prevSelected = this.closest('li').querySelector('.is-selected');
      if (prevSelected) prevSelected.classList.remove('is-selected');
      const selectedOpt = this.closest('li').querySelector("input[type='radio']:checked");
      selectedOpt.closest('label').classList.add("is-selected");

      const wrapperEl = this.closest('ol');
      const formType = wrapperEl.getAttribute('data-form-type');
      updateScore(wrapperEl, formType);
    })
  });
}

const autoSelectDate = () => {
  const listAutoSelect = document.getElementsByClassName('jc-auto-select');
  if (listAutoSelect.length){
    for(let el of listAutoSelect) {
      const typeAuto = el.getAttribute('data-type-auto');
      if (typeAuto === 'month') {
        el.value = new Date().getMonth();
        el.dispatchEvent(new Event('change'));
      } else if (typeAuto === 'year') {
        el.value = new Date().getFullYear();
        el.dispatchEvent(new Event('change'));
      }
    }
  }
}

const submitValidate = (btnSubmit) => {
  btnSubmit.addEventListener('click', function(e){
    const btnTrigger = e.currentTarget;
    const listAllQuestion = Array.prototype.slice.call(btnTrigger.closest('.wrapper-form').querySelectorAll("ol li"));
    const listUnAnsweredQuestion = listAllQuestion.filter(el => !el.querySelector("input[type='radio']:checked"));
    const listAnsweredQuestion = listAllQuestion.filter(el => el.querySelector("input[type='radio']:checked"));
    for (let elm of listUnAnsweredQuestion) {
      elm.classList.add('is-error');
    }
    for (let elm of listAnsweredQuestion) {
      elm.classList.remove('is-error');
    }
    if (!listUnAnsweredQuestion.length) {
      const btnType = btnTrigger.getAttribute('type');
      const nextForm = btnTrigger.getAttribute('data-next-form');
      if (btnType === 'button') {
        btnTrigger.closest('.wrapper-form').classList.add('d-none');
        document.getElementsByClassName(nextForm)[0].classList.remove('d-none');
      }
    }
    const scrollable = document.getElementsByClassName("scrollable-box")[0];
    scrollable.scroll({
      top: 300,
      behavior: 'smooth'
    });    
  });
}

const nextFormValidate = () => {
  const btnNext = document.getElementsByClassName('jc-continue-next');
  if(btnNext.length) {
    for(let el of btnNext) {
      submitValidate(el);
    }
  }
  const submitAllform = document.getElementById("jc-submit-allform");
  if (submitAllform) submitValidate(submitAllform);
}

const convertMonth = () => {
  const elToConvert = document.getElementsByClassName('jc-convert-month');
  const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  if (elToConvert.length){
    for(let el of elToConvert) {
      el.innerHTML = month[parseInt(el.innerHTML)];
    }
  }
}

const checkMonthYearAvailable = (el) => {
  const availableReportDate = document.querySelector('.available-report-date').value.split(',');
  const atecMonth = document.querySelector("select[name='atecMonth']");
  const atecYear = document.querySelector("select[name='atecYear']");
  const monthYear = atecYear.value + atecMonth.value;
  if (availableReportDate.includes(monthYear)) {
    atecMonth.classList.add("is-error");
    if (!atecMonth.parentElement.querySelector('.error-message')){
      let newElm = document.createElement('span');
      newElm.appendChild(document.createTextNode("Atec pada bulan yang dipilih sudah ada, silahkan diganti dengan bulan lain"));
      newElm.classList.add("error-message");
      atecMonth.parentElement.appendChild(newElm);
    }
  } else {
    atecMonth.classList.remove("is-error");
    const errMessage = atecMonth.parentElement.querySelector('.error-message');
    if (errMessage) errMessage.remove();
  }
}

const checkMonthYearWeekAvailable = (el) => {
  const availableReportDate = document.querySelector('.available-weeklynote-date').value.split(',');
  const weeklyYear = document.querySelector("select[name='yearWeeklynote']");
  const weeklyMonth = document.querySelector("select[name='monthWeeklynote']");
  const weeklyWeek = document.querySelector("select[name='weekWeeklynote']");
  const monthYear = weeklyYear.value + weeklyMonth.value + weeklyWeek.value;
  if (availableReportDate.includes(monthYear)) {
    weeklyMonth.classList.add("is-error");
    weeklyYear.classList.add("is-error");
    weeklyWeek.classList.add("is-error");
    if (!weeklyMonth.closest('.row').querySelector('.error-message')){
      let newElm = document.createElement('span');
      newElm.appendChild(document.createTextNode("Atec pada bulan dan minggu ini sudah ada, silahkan diganti dengan bulan atau minggu lain"));
      newElm.classList.add("col-sm-12" ,"error-message", "mt-2");
      weeklyMonth.closest('.row').appendChild(newElm);
    }
  } else {
    weeklyMonth.classList.remove("is-error");
    weeklyYear.classList.remove("is-error");
    weeklyWeek.classList.remove("is-error");
    const errMessage = weeklyMonth.closest('.row').querySelector('.error-message');
    if (errMessage) errMessage.remove();
  }
}

const sortAtecReportRow = () => {
  const listRow = Array.prototype.slice.call(document.querySelectorAll('.atec-report-row'));
  const listVal = [];
  listRow.map(row => {
    const dataValueMonthYear = row.querySelector('p[data-value-monthyear]');
    let val = dataValueMonthYear.getAttribute('data-value-monthyear');
    if (val.substring(4,6).length === 1) {
      val = val.substring(0,4) + "0" + val.substring(4,5);
    };
    listVal.push(val);
  })
  listVal.sort(function(a, b){return b - a});
  listCloneRow = [];
  listVal.forEach(el => {
    if (el.substring(4,5) === "0"){
      el = el.substring(0,4) + el.substring(5,6);
    }
    const elmRow = document.querySelector("p[data-value-monthyear='"+ el +"']");
    const parentRow = elmRow.closest('.atec-report-row');
    listCloneRow.push(parentRow.cloneNode(true));
    parentRow.remove();
  });

  const scrollableBox = document.getElementsByClassName('scrollable-box')[0];
  listCloneRow.forEach(el => {
    scrollableBox.appendChild(el);
  })
}

const closeModalDialog = (el) => {
  const elmModalActive = document.querySelector('.modal-dialog-wrapper');
  elmModalActive.remove();
  document.body.classList.remove('modal-backdrop-custom');
}

const modalConfirmDeleteAtecReport = (el) => {
  const $this = el.currentTarget;
  const monthYear = $this.getAttribute('data-todelete');
  const idAtec = $this.getAttribute('data-id');
  const csrfToken = $this.getAttribute('data-csrf');
  
  const month = parseInt(monthYear.slice(4)) + 1;
  const year = monthYear.slice(0, 4);
  const elmPopUp = `
    <div class="modal-dialog-wrapper">
      <div class="modal-dialog" role="document">
        <div class="modal-content tc">
          <div class="modal-body"> 
            <p>Anda yakin ingin menghapus laporan atec tahun ${year} bulan ${month} ?</p>
          </div>
          <div class="modal-footer">
            <form action="/atec/form-delete" method="POST">
              <input type="hidden" name="idAtec" value="${idAtec}">
              <button type="button" class="btn btn-ghost jc-cancel-modal">Batal</button>
              <input type="hidden" name="_csrf" value="${csrfToken}">
              <button type="submit" class="btn btn-danger ml-4">Hapus</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
  document.body.insertAdjacentHTML('beforeend', elmPopUp);
  document.body.classList.add('modal-backdrop-custom');
  const cancelModalBtn = document.querySelector('.modal-dialog .jc-cancel-modal');
  cancelModalBtn.removeEventListener('click', closeModalDialog);
  cancelModalBtn.addEventListener('click', closeModalDialog);
}

const confirmDeleteRow = () => {
  const btnTrigger = document.getElementsByClassName('jc-delete-atecrow');
  for(let el of btnTrigger) {
    el.addEventListener("click", modalConfirmDeleteAtecReport);
  }
}

const btnAddList = () => {
  const triggerElm = document.querySelector('.jc-btn-add-list');
  if (triggerElm) {    
    triggerElm.addEventListener('click', function(){
      const wrapperList = this.closest('.box-wrapper').querySelector('ul.wrapper-list');
      const inputNewList = this.closest('.box-footer').querySelector('input.new-list');
      const newList = inputNewList.value;
      if (newList.length){
        const elmAppend = `<li><input type ="hidden" name="notes" value="${newList}"> ${newList} </li>`;
        wrapperList.insertAdjacentHTML('beforeend', elmAppend);
        inputNewList.value = '';
      }
    })
  }
}

// HELPER for dev Only
const selectAllFirst = () => {
  const allQuestion = document.querySelectorAll("ol .row");
  for (let el of allQuestion) {
    el.querySelector("label input[type='radio']").click();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  const autoCheckEL = document.getElementsByClassName('jc-check-available-monthyear');
  for(let el of autoCheckEL) {
    el.addEventListener("change", checkMonthYearAvailable);
  }
  const autoCheckELWeekly = document.getElementsByClassName('jc-check-available-monthyearweek');
  for(let el of autoCheckELWeekly) {
    el.addEventListener("change", checkMonthYearWeekAvailable);
  }



  calculateAge();
  selectedRadio();
  autoSelectDate();
  nextFormValidate();
  convertMonth();
  sortAtecReportRow();
  confirmDeleteRow();
  convertScore();
  btnAddList();
});