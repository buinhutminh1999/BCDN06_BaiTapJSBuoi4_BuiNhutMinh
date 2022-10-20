function sapXepTang() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var thongBao = ''
    if (!a || !b || !c) {
        thongBao = 'giá trị nhập không được để trống'
    } else {
        if (a < b) {
            if (b < c) {
                thongBao = a + ' ' + b + ' ' + c
            } else if (a < c) {
                thongBao = a + ' ' + c + ' ' + b
            } else {
                thongBao = c + ' ' + a + ' ' + b
            }
        } else {
            if (c > a) {
                thongBao = b + ' ' + a + ' ' + c
            } else if (c > b) {
                thongBao = b + ' ' + c + ' ' + a
            } else {
                thongBao = c + ' ' + b + ' ' + a
            }
        }
    }
    document.getElementById('txtThongBao').innerHTML = thongBao;
}

function kiemTraDuLieuTrong(a, b, c) {
    var thongBao = ''
    if (!a || !b || !c) {
        thongBao = 'giá trị nhập ko được để trống'
    }
    return thongBao;
}

document.getElementById('btnTinh').onclick = sapXepTang;

function chaoHoi() {
    var select = document.getElementById('select').value;
    var loiChao = '';
    if (select === 'B') {
        loiChao = 'con chào bố!'
    } else if (select === 'M') {
        loiChao = 'con chào mẹ!'
    } else if (select === 'A') {
        loiChao = 'chào anh trai!'
    } else if (select === 'E') {
        loiChao = 'Chào em gái!'
    } else {
        loiChao = 'quên chọn ùi kìa :D'
    }
    document.getElementById('txtChaoHoi').innerHTML = loiChao;
}
document.getElementById('btnChao').onclick = chaoHoi

function demSo() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var num3 = Number(document.getElementById('num3').value)
    var num = 0;
    if (num1 % 2 === 0) {
        num = num + 1
    }

    if (num2 % 2 === 0) {
        num = num + 1
    }

    if (num3 % 2 === 0) {
        num = num + 1
    }

    soLe = 3 - num;
    document.getElementById('txtDem').innerHTML = 'Có ' + num + ' số chẵn' + ' ' + ',' + ' ' + 'Có' + ' ' + soLe + ' số lẻ';
}

document.getElementById('btnDem').onclick = demSo;


function kiemTraTG() {
    var numA = Number(document.getElementById('numA').value)
    var numB = Number(document.getElementById('numB').value)
    var numC = Number(document.getElementById('numC').value)
    var thongBaoTG = ''
    if (numA + numB > numC && numA + numC > numB && numB + numC > numA) {

        if (numA === numC && numB === numC) {
            thongBaoTG = 'tam giác đều'
        } else if (numA === numB || numA === numC || numB === numC) {
            thongBaoTG = 'tam giác cân'
        } else if (numC * numC === numA * numA + numB * numB || numB * numB === numA * numA + numC * numC || numA * numA === numB * numB + numC * numC) {
            thongBaoTG = 'tam giác vuông'
        } else {
            thongBaoTG = 'Đây là 1 tam giác khác'
        }
    } else {
        thongBaoTG = 'Ba cạnh trên không phải là tam giác'
    }
    document.getElementById('txtTG').innerHTML = thongBaoTG

}

document.getElementById('btnTG').onclick = kiemTraTG

function getMyEle(id) {
    return document.getElementById(id);

}

document.getElementById('btnNgayMai').onclick = function () {
    var ngay = Number(getMyEle('ngay').value);
    var thang = Number(getMyEle('thang').value);
    var nam = Number(getMyEle('nam').value);
    var kiemTraNgayThangNam = ngayThangNamHopLe(ngay, thang, nam)
    var namNhuan = tinhnamNhuan(nam)
    var thongBaoNgayMai = '';
    if (kiemTraNgayThangNam) {
        alert('Dữ liệu không hợp lệ');
    } else if (ngay === 31) {
        if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 12 || thang === 10) {
            ngay = 1;
            thang++;
            thongBaoNgayMai = 'Ngày mai là: ' + ngay + '/' + thang + '/' + nam;
        } else {
            alert('dữ liệu không hợp lệ')
        }
    } else if (ngay === 30) {
        if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            ngay = 1;
            thang++;
            thongBaoNgayMai = 'Ngày mai là: ' + ngay + '/' + thang + '/' + nam;
        } else {
            alert('dữ liệu không hợp lệ')
        }
    } else if (thang === 2) {
        if (ngay >= 30) {
            alert('Dữ liệu không hợp lệ')
        } else if (namNhuan && ngay === 29) {
            ngay = 1;
            thang = 3;
            thongBaoNgayMai = 'Ngày mai là: ' + ngay + '/' + thang + '/' + nam;
        } else if (!namNhuan && ngay === 29) {
            alert('Dữ liệu không hợp lệ');
        } else if(!namNhuan && ngay === 28) {
           ngay = 1;
           thang++;
           thongBaoNgayMai = 'Ngày mai là: ' + ngay + '/' + thang + '/' + nam;
        }else{
            ngay++;
            thongBaoNgayMai = 'Ngày mai là: ' + ngay + '/' + thang + '/' + nam;
        }
    }else {
        ngay++;
        thongBaoNgayMai = 'Ngày mai là: ' + ngay + '/' + thang + '/' + nam;
    }
        document.getElementById('txtDMY').innerHTML = thongBaoNgayMai;
    }

    document.getElementById('btnHomQua').onclick = function () {
        var ngay = Number(getMyEle('ngay').value);
        var thang = Number(getMyEle('thang').value);
        var nam = Number(getMyEle('nam').value);
        var thongBaoNgayHomQua = '';
        var kiemTraNgayThangNam = ngayThangNamHopLe(ngay, thang, nam)
        var namNhuan = tinhnamNhuan(nam)
        if (kiemTraNgayThangNam) {
            alert('Dữ liệu không hợp lệ');
        } else if (ngay === 1) {
            if (thang === 5 || thang === 7 || thang === 10 || thang === 12) {
                ngay = 30;
                thang = thang - 1;
                thongBaoNgayHomQua = 'Ngày hôm qua là: ' + ngay + '/' + thang + '/' + nam;

            } else if (thang === 1 || thang === 2 || thang === 4 || thang === 6 || thang === 8 || thang === 9 || thang === 11) {
                ngay = 31;
                thang = thang - 1;
                thongBaoNgayHomQua = 'Ngày hôm qua là: ' + ngay + '/' + thang + '/' + nam;

            } else if (namNhuan) {
                ngay = 29;
                thang = thang - 1;
                thongBaoNgayHomQua = 'Ngày hôm qua là: ' + ngay + '/' + thang + '/' + nam;

            } else if (!namNhuan) {
                ngay = 28;
                thang = thang - 1;
                thongBaoNgayHomQua = 'Ngày hôm qua là: ' + ngay + '/' + thang + '/' + nam;
            }
        }
        else {
            ngay = ngay - 1;
            thongBaoNgayHomQua = 'Ngày hôm qua là: ' + ngay + '/' + thang + '/' + nam;
        }

        document.getElementById('txtDMY').innerHTML = thongBaoNgayHomQua
    }

    function tinhnamNhuan(nam) {
        var namNhuan = (nam % 4 === 0 && nam % 100 != 0) || (nam % 400 === 0)
        return namNhuan;
    }

    function ngayThangNamHopLe(ngay, thang, nam) {
        var kiemTraNgayThangNam = !ngay || !thang || !nam || ngay >= 33 || ngay <= 0 || thang >= 13 || thang <= 0;
        return kiemTraNgayThangNam
    }

    document.getElementById('btnTinhNgay').onclick = function () {
        var thang = Number(getMyEle('month').value);
        var nam = Number(getMyEle('years').value);
        var thongBaoNgay = '';
        var kiemTraNgayThangNam = ngayThangNamHopLe(ngay, thang, nam)
        if (kiemTraNgayThangNam) {
            alert('Dữ liệu không hợp lệ');
        } else {
            switch (thang) {
                case 1:
                    thongBaoNgay = 'Tháng ' + thang + ' Năm' + ' ' + nam + ' có 31 ngày';
                    break;
                case 2:
                    if ((nam % 4 === 0 && nam % 100 != 0) || (nam % 400 === 0)) {
                        thongBaoNgay = 'Tháng ' + thang + ' Năm' + ' ' + nam + ' năm nhuận có 29 ngày';

                    } else {
                        thongBaoNgay = 'Tháng ' + thang + ' Năm' + ' ' + nam + ' có 28 ngày';
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    thongBaoNgay = 'Tháng ' + thang + ' Năm' + ' ' + nam + ' có 30 ngày';
                    break;
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    thongBaoNgay = 'Tháng ' + thang + ' Năm' + ' ' + nam + ' có 31 ngày';
                    break;
                default:
                    break;
            }
        }
        document.getElementById('txtTimNgay').innerHTML = thongBaoNgay;
    }


    /**
     * Khối 1: 
     * */
    function docBaSo() {
        var baChuSo = Number(document.getElementById('baChuSo').value);
        var docSoTram = '';
        var docsoChuc = ''
        var docSoDV = '';
        var phanTram = Math.floor(baChuSo / 100);
        var phanChuc = Math.floor(baChuSo / 10) % 10;
        var phanDV = Math.floor(baChuSo % 10);
        if (baChuSo >= 1000 || !baChuSo || baChuSo <= 99) {
            alert('dữ liệu không hợp lệ')
        } else {
            switch (phanTram) {
                case 1:
                    docSoTram = 'Một trăm'
                    break;
                case 2:
                    docSoTram = 'Hai trăm'
                    break;
                case 3:
                    docSoTram = 'Ba trăm'
                    break;
                case 4:
                    docSoTram = 'Bốn trăm'
                    break;
                case 5:
                    docSoTram = 'Năm trăm'
                    break;
                case 6:
                    docSoTram = 'Sáu trăm'
                    break;
                case 7:
                    docSoTram = 'Bảy trăm'
                    break;
                case 8:
                    docSoTram = 'Tám trăm'
                    break;
                case 9:
                    docSoTram = 'Chín trăm'
                    break;
                default:
                    break;
            }

            switch (phanChuc) {
                case 1:
                    docsoChuc = 'mười'
                    break;
                case 2:
                    docsoChuc = 'hai mươi'
                    break;
                case 3:
                    docsoChuc = 'ba mươi'
                    break;
                case 4:
                    docsoChuc = 'bốn mươi'
                    break;
                case 5:
                    docsoChuc = 'năm mươi'
                    break;
                case 6:
                    docsoChuc = 'sáu mươi'
                    break;
                case 7:
                    docsoChuc = 'bảy mươi'
                    break;
                case 8:
                    docsoChuc = 'tám mươi'
                    break;
                case 9:
                    docsoChuc = 'chín mươi'
                    break;
                default:
                    break;
            }

            switch (phanDV) {
                case 1:
                    docSoDV = 'mốt'
                    break;
                case 2:
                    docSoDV = 'hai'
                    break;
                case 3:
                    docSoDV = 'ba'
                    break;
                case 4:
                    docSoDV = 'bốn'
                    break;
                case 5:
                    docSoDV = 'năm'
                    break;
                case 6:
                    docSoDV = 'sáu'
                    break;
                case 7:
                    docSoDV = 'bảy'
                    break;
                case 8:
                    docSoDV = 'tám'
                    break;
                case 9:
                    docSoDV = 'chín'
                    break;
                default:
                    break;
            }
        }


        document.getElementById('txtDocSo').innerHTML = docSoTram + ' ' + docsoChuc + ' ' + docSoDV
    }

    document.getElementById('btnDocSo').onclick = docBaSo

    function timSVXaTruong() {
        var tenSV1 = document.getElementById('tenSV1').value;
        var toaDoX = Number(document.getElementById('toaDoX').value);
        var toaDoY = Number(document.getElementById('toaDoY').value);
        var tenSV2 = document.getElementById('tenSV2').value;
        var toaDoX2 = Number(document.getElementById('toaDoX2').value);
        var toaDoY2 = Number(document.getElementById('toaDoY2').value);
        var tenSV3 = document.getElementById('tenSV3').value;
        var toaDoX3 = Number(document.getElementById('toaDoX3').value);
        var toaDoY3 = Number(document.getElementById('toaDoY3').value);
        var toaDoTruong = Number(document.getElementById('toaDoTruong').value);
        var toaDoYTruong = Number(document.getElementById('toaDoYTruong').value);

        var toaDoSV1 = congThucDoDai(toaDoTruong, toaDoX, toaDoYTruong, toaDoY)
        var toaDoSV2 = congThucDoDai(toaDoTruong, toaDoX2, toaDoYTruong, toaDoY2)
        var toaDoSV3 = congThucDoDai(toaDoTruong, toaDoX3, toaDoYTruong, toaDoY3)
        var thongBao = '';

        if (toaDoSV1 > toaDoSV2 && toaDoSV1 > toaDoSV3) {
            thongBao = tenSV1 + ' xa nhất'
        } else if (toaDoSV2 > toaDoSV1 && toaDoSV2 > toaDoSV3) {
            thongBao = tenSV2 + ' xa nhất'
        } else {
            thongBao = tenSV3 + ' xa nhất'
        }

        document.getElementById('txtTim').innerHTML = thongBao;
    }

    document.getElementById('btnTim').onclick = timSVXaTruong

    function congThucDoDai(x2, x1, y2, y1) {
        var d = Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)))
        return d;
    }
