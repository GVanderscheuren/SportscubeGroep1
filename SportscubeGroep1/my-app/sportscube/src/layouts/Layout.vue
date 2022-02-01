<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      style="background-color: #44c8f5; padding-top: 10px; padding-bottom: 10px"
    >
      <q-toolbar>
        <q-toolbar-title style="font-size: 30px; margin-left: 60px">
          Sportscube
        </q-toolbar-title>
        <q-btn
          to="/Group"
          flat
          round
          style="color: white; margin-right: 60px; font-size: 18px"
          icon="logout"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

