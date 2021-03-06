<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:ext="http://exslt.org/common"
  extension-element-prefixes="ext">

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Projects overview page
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     This file is part of XML-to-bootstrap.
     https://github.com/acch/XML-to-bootstrap

     Copyright 2016 Achim Christ
     Released under the MIT license
     (https://github.com/acch/XML-to-bootstrap/blob/master/LICENSE)

     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Project overview page contents
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

  <xsl:template match="projects">

    <!-- navigation breadcrumb -->
    <xsl:call-template name="component.breadcrumb">
      <xsl:with-param name="current" select="title" />
    </xsl:call-template>

    <!--p class="text-muted">
      Click on the title to continue reading&#8230;
    </p-->

    <!-- spacing -->
    <hr class="invisible" />

    <xsl:choose>
      <xsl:when test="not(project[not(@draft)])">

        <p class="font-weight-bold">
          There are no projects, yet. Why don't you create one?
        </p>

      </xsl:when>
      <xsl:otherwise>

        <!-- project cards -->
        <main class="row">

          <!-- iterate over all projects -->
          <xsl:for-each select="project[not(@draft)]">
            <xsl:sort select="date" order="descending" />

            <!-- format filename -->
            <xsl:variable name="filename">
              <xsl:call-template name="format.filename">
                <xsl:with-param name="string" select="title" />
              </xsl:call-template>
            </xsl:variable>

            <!-- responsive column -->
            <div class="{$grid.cardcolumn}">

              <!-- project card -->
              <article class="card card-block" itemscope="itemscope" itemtype="http://schema.org/CreativeWork">

                <!-- main title -->
                <h2 class="card-title" itemprop="headline">
                  <a class="x2b-alt-lnk" href="{$site.url}{$project.path}{$filename}.html">
                    <xsl:value-of select="title" />
                  </a>
                </h2>

                <a class="x2b-sbtl-lnk" href="{$site.url}{$project.path}{$filename}.html">

                  <!-- optional subtitle -->
                  <xsl:if test="subtitle">
                    <p class="card-text font-weight-bold" itemprop="alternativeHeadline">
                      <xsl:value-of select="subtitle" />
                    </p>
                  </xsl:if>

                  <!-- project description -->
                  <xsl:if test="short">
                    <p class="card-text" itemprop="description">
                      <xsl:value-of select="short" />
                    </p>
                  </xsl:if>

                </a>

                <!-- project button -->
                <div class="d-flex mt-3">
                  <a role="button" class="[ btn btn-outline-primary ] ml-auto" href="{$site.url}{$project.path}{$filename}.html">
                    <xsl:text disable-output-escaping="yes">&amp;#160;</xsl:text>
                    <xsl:value-of select="title" />
                    <xsl:text disable-output-escaping="yes">&amp;#160;</xsl:text>
                    <xsl:call-template name="component.icon">
                      <xsl:with-param name="icon">fa-arrow-right</xsl:with-param>
                    </xsl:call-template>
                  </a>
                </div>

              </article><!-- /card -->

            </div><!-- /column -->

          </xsl:for-each>

        </main><!-- /project cards -->

      </xsl:otherwise>
    </xsl:choose>

  </xsl:template>

</xsl:stylesheet>
