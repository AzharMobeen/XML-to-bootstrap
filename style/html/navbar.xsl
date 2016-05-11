<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Animated navigation bar
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     This file is part of XML-to-bootstrap.
     https://github.com/acch/XML-to-bootstrap

     Copyright 2016 Achim Christ
     Released under the MIT license
     (https://github.com/acch/XML-to-bootstrap/blob/master/LICENSE)

     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

  <!-- this template generates HTML code for the fixed-top navbar -->
  <xsl:template name="html.navbar">
    <xsl:param name="title" /><!-- string -->

    <!-- options -->
    <xsl:variable name="site.title" select="/site/options/option[@name = 'site.title']" />
    <xsl:variable name="site.author" select="/site/options/option[@name = 'site.author']" />

    <!-- bootstrap navbar -->
    <nav class="[ navbar navbar-fixed-top navbar-light ] x2b-nvbr js-nvbr [ sps sps--abv ] headroom--pinned">
      <div class="container p-x-0">

        <!-- make toggler full width so that collapsing content wraps to the next line -->
        <div class="container-fluid p-x-0">

          <!-- button -->
          <button class="navbar-toggler pull-xs-left hidden-sm-up" type="button" data-toggle="collapse" data-target="#cllpsNvbr" aria-controls="cllpsNvbr">
            &#9776;
          </button>

          <!-- site title -->
          <a class="navbar-brand m-x-1 hidden-sm-up" href="{$site.url}">
            <xsl:value-of select="$site.title" />
          </a>

        </div><!-- /container-fluid -->

        <!-- collapsing navbar -->
        <div class="collapse navbar-toggleable-xs" id="cllpsNvbr">

        <div class="container-fluid x2b-nvbr-cllps p-x-0">

          <!-- site title -->
          <a class="navbar-brand m-x-1 hidden-xs-down" href="{$site.url}">
            <xsl:value-of select="$site.title" />
          </a>

          <!-- divider -->
          <div class="navbar-divider hidden-xs-down">
            <!-- prevent tag from collapsing -->
            <xsl:text> </xsl:text>
          </div>

          <ul class="nav navbar-nav">

            <!-- optional articles component -->
            <xsl:if test="$articles">

              <!-- check if current page is articles -->
              <xsl:variable name="active">
                <xsl:if test="$title = /site/articles/title"> active</xsl:if>
              </xsl:variable>

              <li class="nav-item{$active} m-x-1">
                <a class="nav-link" href="{$site.url}articles.html">

                  <!-- icon and title -->
                  <xsl:call-template name="element.icon">
                    <xsl:with-param name="icon">fa-newspaper-o</xsl:with-param>
                  </xsl:call-template>&#160;<xsl:value-of select="/site/articles/title" />

                  <!-- mark active item for screen readers -->
                  <xsl:if test="$title = /site/articles/title">
                    <span class="sr-only"> (current)</span>
                  </xsl:if>

                </a>
              </li>

            </xsl:if>

            <!-- optional projects component -->
            <xsl:if test="$projects">

              <!-- check if current page is projects -->
              <xsl:variable name="active">
                <xsl:if test="$title = /site/projects/title"> active</xsl:if>
              </xsl:variable>

              <li class="nav-item{$active} m-x-1">
                <a class="nav-link" href="{$site.url}projects.html">

                  <!-- icon and title -->
                  <xsl:call-template name="element.icon">
                    <xsl:with-param name="icon">fa-rocket</xsl:with-param>
                  </xsl:call-template>&#160;<xsl:value-of select="/site/projects/title" />

                  <!-- mark active item for screen readers -->
                  <xsl:if test="$title = /site/projects/title">
                    <span class="sr-only"> (current)</span>
                  </xsl:if>

                </a>
              </li>

            </xsl:if>

            <!-- optional galleries component -->
            <xsl:if test="$galleries">

              <!-- check if current page is galleries -->
              <xsl:variable name="active">
                <xsl:if test="$title = /site/galleries/title"> active</xsl:if>
              </xsl:variable>

              <li class="nav-item{$active} m-x-1">
                <a class="nav-link" href="{$site.url}galleries.html">

                  <!-- icon and title -->
                  <xsl:call-template name="element.icon">
                    <xsl:with-param name="icon">fa-picture-o</xsl:with-param>
                  </xsl:call-template>&#160;<xsl:value-of select="/site/galleries/title" />

                  <!-- mark active item for screen readers -->
                  <xsl:if test="$title = /site/galleries/title">
                    <span class="sr-only"> (current)</span>
                  </xsl:if>
                </a>
              </li>

            </xsl:if>

            <!-- author info -->
            <!--li class="navbar-brand hidden-xs-down pull-sm-right">
              by <xsl:value-of select="$site.author" />
            </li-->

            <!-- button -->
            <button type="button" class="[ btn btn-primary-outline ] hidden-sm-down pull-xs-right" data-toggle="button" aria-pressed="false" autocomplete="off">It's fresh!</button>

          </ul>

        </div>

        </div><!-- /collapse -->

      </div><!-- /container -->
    </nav>

  </xsl:template>

</xsl:stylesheet>
