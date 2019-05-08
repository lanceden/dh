let accountData = JSON.parse(`{
  "ResultCode": "0000",
  "Status": "OK",
  "Data": {
      "Result": {
          "ApplyDate": "2019/03/08 00:00:00",
          "CertificateCompany": null,
          "CertificateCompanyID": null,
          "CertificateDatetime": null,
          "CertificatePass": false,
          "CommunicationAddress": {
              "City": "台中市",
              "District": "南屯區",
              "Road": "132123號",
              "Zip": "408"
          },
          "CustBirthday": "1986/07/15 00:00:00",
          "CusteMail": "chihai@skl.com.tw",
          "CustIDN": "A121916657",
          "CustMobile": "0985413625",
          "CustName": "不要再刪帳號了",
          "EmergencyAddress": {
              "City": null,
              "District": null,
              "Road": null,
              "Zip": null
          },
          "EmergencyExt": "",
          "EmergencyMobile": null,
          "EmergencyName": null,
          "EmergencyTel1": "",
          "EmergencyTel1Area": "",
          "InsuranceDatetime": "2019/03/08 13:15:18",
          "IsForeigner": false,
          "JoinSource": "3",
          "OTPDatetime": "2019/03/20 15:21:34",
          "OTPPass": true,
          "RegisteredAddress": {
              "City": "基隆市",
              "District": "仁愛區",
              "Road": "12313",
              "Zip": "200"
          },
          "VerificationFlg": 0
      },
      "IsSuccess": true,
      "Code": null,
      "Message": "取回帳號資料成功",
      "Exceptions": null
  }
}`)

export {
  accountData
}
