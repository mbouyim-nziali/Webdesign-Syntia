"use strict";

class Kinderkonto extends Konto {

    constructor(iban, inhaber, einzahlung, limit) {
        super(iban, inhaber, einzahlung);
        this._limit = limit;
    }

}