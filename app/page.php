<?php
  include './components/Headers.php';
  include './components/Hero.php';

  echo '<div class="min-h-screen bg-black text-white overflow-hidden">';
  echo '  <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>';
  echo '  <?php include("./components/Headers.php"); ?>';
  echo '  <main class="relative">';
  echo '    <?php include("./components/Hero.php"); ?>';
  echo '  </main>';
  echo '</div>';
?>
