<?php
    $aniver = new DateTime();
    $hoje = new DateTime();
    
    $aniver->setDate(2022, 05, 12);
    $aniver->setTime(21, 43, 00);
    
    $diff = $hoje->diff($aniver);
    
    $data = [
        'anos' => $diff->y,
        'meses' => $diff->m,
        'dias' => $diff->d,
        'horas' => $diff->h,
        'minutos' => $diff->i,
        'segundos' => $diff->s
    ];
    
    header('Content-Type: application/json');
    echo json_encode($data);

?>