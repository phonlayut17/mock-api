const express = require('express');
const app = express();
const port = 4000;
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

app.post('/cms/api/v1/activate-code/create', (req, res) => {
    const data = {
        activate_code: '1234-1234-1234'
    };
    res.json({ status_code: 200, message: 'success', data: data });
});

app.post('/utility/api/v1/customer/register', (req, res) => {
    console.log('data send ' + req.body);
    res.json({ status_code: 200, message: 'success' });
});

app.post('/utility/api/v1/activate-code/activate', (req, res) => {
    console.log('activate send ' + req.body.activate_code);
    const data = {
        expired_time: null,
        is_expired: false,
        activated: false,
        additional_detail: {
            company: '000'
        }
    };
    res.json({ status_code: 200, message: 'success', data: data });
});

app.post('/payment/api/v1/transaction/create', (req, res) => {
    console.log('data send ' + req.body);
    res.json({ status_code: 200, message: 'success', payment_url: 'https://psipay.bangkokbank.com/b2c/eng/payment/payForm.jsp?merchantId=9682&amount=123.0&orderRef=0000000001&currCode=764&successUrl=https://store-dev.axonstech.com/success/SuccessPage&failUrl=https://store-dev.axonstech.com/payment/PaymentPage&cancelUrl=https://store-dev.axonstech.com/payment/PaymentPage&payType=N&lang=T&remark=ทดสอบจ้า' });
});

app.post('/payment/api/v1/transaction/query', (req, res) => {
    console.log('ref doc id send ' + req.body.ref_doc_id);
    const data = {
        price_plan_name: 'LITE Version',
        price_plan_amount: 399.00,
        price_plan_days: 30
    };
    res.json({ status_code: 200, message: 'success', data: data });
});

app.get('/utility/api/v1/customer/profile', (req, res) => {
    const data = {
        name_title_code: 1,
        name_title_text: 'นาย',
        name: 'สมถุย',
        surname: 'ลุยน้ำป่า',
        religion_code: 1,
        religion_text: 'ไทย',
        personal_id: '0125535002479',
        phone_number: '0989998999',
        email: 'bbb@mail.com',
        address: [{
            address_text: 'ถ.ประชาร่วมใจ',
            country_code: 'TH',
            country_text: 'ไทย',
            sub_district_code: '104605',
            sub_district_text: 'ทรายกองดินใต้',
            district_code: '104600',
            district_text: 'คลองสามวา',
            province_code: '100000',
            province_text: 'กรุงเทพฯ',
            post_code: '10510'
        }]
    };
    res.json({ status_code: 200, message: 'success', data: data });
});

app.post('/utility/api/v1/customer/profile', (req, res) => {
    console.log('data send ' + req.body);
    res.json({ status_code: 200, message: 'success', data: req.body });
});

app.get('/utility/api/v1/customer/product', (req, res) => {
    console.log('call is correct');
    const data = [
        {
            id: 1,
            name: 'AXONS EAT',
            category: 'Web',
            package_name: 'Gofast Package',
            package_price: 3600.00,
            expired_date: '21/10/2022',
            activated: true,
            expired: false,
            url: 'https://axons-eat.com'
        },
        {
            id: 2,
            name: 'AXONS POS',
            category: 'Android App on Tablet',
            package_name: 'Smart Package',
            package_price: 3600.00,
            expired_date: '21/10/2022',
            activated: true,
            expired: true,
            url: null
        },
        {
            id: 3,
            name: 'AXONS POS',
            category: 'Android App on Tablet',
            package_name: 'Gofast Package',
            package_price: 3600.00,
            expired_date: '21/10/2022',
            activated: true,
            expired: true,
            url: null
        },
    ];
    res.json({ status_code: 200, message: 'success', data: data });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});