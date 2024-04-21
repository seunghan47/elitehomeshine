package com.paulim.elitehomeshine.elitehomeshine.model;

import jakarta.persistence.*;

@Entity
@Table
public class Booking {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;
    private int bedNum;
    private int bahtNum;
    private int electronicNums;
    private boolean hasPet;
    private boolean electronics;
    private boolean laundry;

    public Booking() {
    }

    public Booking(int bedNum, int bahtNum, int electronicNums, boolean hasPet, boolean electronics, boolean laundry) {
        this.bedNum = bedNum;
        this.bahtNum = bahtNum;
        this.electronicNums = electronicNums;
        this.hasPet = hasPet;
        this.electronics = electronics;
        this.laundry = laundry;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", bedNum=" + bedNum +
                ", bahtNum=" + bahtNum +
                ", electronicNums=" + electronicNums +
                ", hasPet=" + hasPet +
                ", electronics=" + electronics +
                ", laundry=" + laundry +
                '}';
    }

    public int getBedNum() {
        return bedNum;
    }

    public void setBedNum(int bedNum) {
        this.bedNum = bedNum;
    }

    public int getBahtNum() {
        return bahtNum;
    }

    public void setBahtNum(int bahtNum) {
        this.bahtNum = bahtNum;
    }

    public int getElectronicNums() {
        return electronicNums;
    }

    public void setElectronicNums(int electronicNums) {
        this.electronicNums = electronicNums;
    }

    public boolean isHasPet() {
        return hasPet;
    }

    public void setHasPet(boolean hasPet) {
        this.hasPet = hasPet;
    }

    public boolean isElectronics() {
        return electronics;
    }

    public void setElectronics(boolean electronics) {
        this.electronics = electronics;
    }

    public boolean isLaundry() {
        return laundry;
    }

    public void setLaundry(boolean laundry) {
        this.laundry = laundry;
    }
}
