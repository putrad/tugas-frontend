//Rumus Lingkaran
import { PHI } from './konstanta.js';
export const luasLingkaran = (radius) => PHI * radius ** 2;
export const kelilingLingkaran = (radius) => 2 * PHI * radius;

//Rumus Persegi
export const luasPersegi = (sisi) => sisi ** 2 ;
export const kelilingPersegi = (sisi) => 4 * sisi;

//Rumus Persegi Panjang
export const luasPersegiPanjang = (panjang, lebar) => panjang * lebar;
export const kelilingPersegiPanjang = (panjang, lebar) => 2 * (panjang + lebar);

//Rumus Jajar Genjang
export const luasJajarGenjang = (alas, tinggi) => alas * tinggi;
export const kelilingJajarGenjang = (alas,sisimiring) => 2 * (alas + sisimiring);

//Rumus Trapesium
export const luasTrapesium = (alasbawah, alasatas, tinggi) => 0.5 + (alasbawah +alasatas) * tinggi;
export const kelilingTrapesium = (sisi1, sisi2, sisi3, sisi4) => sisi1 + sisi2 + sisi3 + sisi4; 

//Rumus Segitiga
export const luasSegitiga = (alas, tinggi) => 0.5 * alas * tinggi;
export const kelilingSegitiga = (sisi1, sisi2, sisi3) => sisi1 + sisi2 + sisi3;

//Rumus Belah Ketupat
export const luasBelahKetupat = (diagonal1, diagonal2) => 0.5 * diagonal1 * diagonal2;
export const kelilingBelahKetupat = (sisi) => 4 * sisi;

//Rumus Layang-Layang
export const luasLayangLayang = (diagonal1, diagonal2) => 0.5 * diagonal1 * diagonal2;
export const kelilingLayangLayang = ( sisiPendek, sisiPanjang) => (2 * sisiPendek) + (2 * sisiPanjang);