import React from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'

export const PlanDetailPage = () => {
    return (
        <PrivatePagesLayout>
            <br />
            <h4><u>Plan:</u></h4>
            <h1>Un plan</h1>
            <hr />
            <div class="container my-4">
                <div class="row fw-bold bg-light border">
                    <div class="col-2 py-2 text-center">Día</div>
                    <div class="col-5 py-2 text-center">Almuerzo</div>
                    <div class="col-5 py-2 text-center">Cena</div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Lunes</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Ensalada César con pollo y aderezo casero">
                                Ensalada César con pollo y aderezo casero
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Pasta Boloñesa con queso parmesano">
                                Pasta Boloñesa con queso parmesano
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Martes</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Arroz con pollo y ensalada fresca">
                                Arroz con pollo y ensalada fresca
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Crema de zapallo y pan artesanal">
                                Crema de zapallo y pan artesanal
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Miércoles</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Tacos vegetarianos con guacamole">
                                Tacos vegetarianos con guacamole
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Hamburguesa de lentejas con papas">
                                Hamburguesa de lentejas con papas
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Jueves</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Pollo al curry con arroz basmati">
                                Pollo al curry con arroz basmati
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Ensalada de quinoa y vegetales asados">
                                Ensalada de quinoa y vegetales asados
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Viernes</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Milanesa de berenjena con puré">
                                Milanesa de berenjena con puré
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Pizza casera con vegetales">
                                Pizza casera con vegetales
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Sábado</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Pasta al pesto con nueces">
                                Pasta al pesto con nueces
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Tortilla española y ensalada">
                                Tortilla española y ensalada
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-2 py-2 text-center fw-bold">Domingo</div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Empanadas al horno con ensalada">
                                Empanadas al horno con ensalada
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-5 py-2">
                        <div class="d-flex align-items-center">
                            <span class="flex-grow-1 text-truncate" title="Sopa minestrone con pan de ajo">
                                Sopa minestrone con pan de ajo
                            </span>
                            <button class="btn btn-sm btn-success ms-2" title="Ver detalle">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}
